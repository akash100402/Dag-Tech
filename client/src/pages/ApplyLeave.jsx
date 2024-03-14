import { useState } from "react";
import { Alert, Button, FileInput, TextInput } from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function ApplyLeave() {
  const navigate = useNavigate();
  const [reason, setReason] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUploadProgress, setPdfUploadProgress] = useState(null);
  const [pdfUploadError, setPdfUploadError] = useState(null);
  const [description, setDescription] = useState("");
  const [publishError, setPublishError] = useState(null);

  const handlePdfUpload = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) {
        setPdfUploadError("Please select a PDF file");
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
          setPdfUploadError("PDF upload failed");
          setPdfUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPdfUploadProgress(null);
            setPdfUploadError(null);
            setPdfFile(downloadURL);
          });
        }
      );
    } catch (error) {
      setPdfUploadError("PDF upload failed");
      setPdfUploadProgress(null);
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/leave/new-leave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reason,
          startDate,
          endDate,
          pdfUrl: pdfFile,
          description,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.error || "An error occurred.");
        return;
      }
      setPublishError(null);
      navigate(`/leave/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong");
      console.error(error);
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
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
          id="reason"
          className="flex-1"
        />
        <div className="flex gap-4 items-center justify-between">
          <TextInput
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            id="startDate"
            placeholder="From Date"
            required
          />
          <TextInput
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            id="endDate"
            placeholder="To Date"
            required
          />
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            id="pdfUrl"
            type="file"
            accept=".pdf"
            onChange={handlePdfUpload}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
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
        {pdfUploadError && <Alert color="failure">{pdfUploadError}</Alert>}
        {pdfFile && (
          <div>
            <p>PDF uploaded successfully:</p>
            <p>{pdfFile}</p>
          </div>
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          value={description}
          onChange={setDescription}
          required
        />
        <Button type="submit" gradientDuoTone="greenToBlue">
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
