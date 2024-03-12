import { Alert, Button, FileInput, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [pdfUploadProgress, setPdfUploadProgress] = useState(null);
  const [pdfUploadError, setPdfUploadError] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUploadPdf = async () => {
    try {
      if (!file) {
        setPdfUploadError("Please select a PDF document");
        return;
      }
      setPdfUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPdfUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setPdfUploadError("Document upload failed");
          setPdfUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPdfUploadProgress(null);
            setPdfUploadError(null);
            setFormData({ ...formData, pdf: downloadURL }); // Update formData with the PDF URL
          });
        }
      );
    } catch (error) {
      setPdfUploadError("Document upload failed");
      setPdfUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, fromDate, toDate }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Request for Leave
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Reason"
          required
          id="title"
          className="flex-1"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <div className="flex gap-4 items-center justify-between">
          <TextInput
            type="date"
            placeholder="From Date"
            required
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <TextInput
            type="date"
            placeholder="To Date"
            required
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadPdf}
            disabled={pdfUploadProgress}
          >
            {pdfUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={pdfUploadProgress}
                  text={`${pdfUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Document"
            )}
          </Button>
        </div>
        {/* {pdfUploadError && <Alert color="failure">{pdfUploadError}</Alert>}
        {formData.pdf && (
          <div className="w-full h-72 overflow-hidden">
            <embed
              src={formData.pdf}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        )} */}
        <ReactQuill theme="snow" placeholder="Write something..." className="h-72
        mb-12" required onChange=
        {(value) => {
          setFormData({ ...formData, content: value });
        }}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Request
        </Button>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
