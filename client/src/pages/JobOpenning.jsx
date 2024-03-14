import { Button, FileInput, TextInput } from "flowbite-react";
import { useState } from "react";

export default function EasyApplyForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resume, setResume] = useState(null);
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    setSubmitting(true);
    setTimeout(() => {
      // Simulate submission
      setSubmitting(false);
      alert("Application submitted successfully!");
    }, 2000);
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl mt-6 mb-4 font-semibold">WE ARE HIRING</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-6 text-center text-violet-800 dark:text-violet-300">
          JavaScript Backend Developer
        </h2>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            {" "}
            {/* Add margin-bottom class */}
            Minimum <span className="text-lime-500">3 years</span> of experience
            in backend development using JavaScript.
          </li>
          <li className="mb-4">
            {" "}
            {/* Add margin-bottom class */}
            Proficiency in{" "}
            <span className="text-lime-500">Node.js and Express.js</span>{" "}
            frameworks.
          </li>
          <li className="mb-4">
            {" "}
            {/* Add margin-bottom class */}
            Strong understanding of{" "}
            <span className="text-lime-500">RESTful API design</span> and
            development.
          </li>
          <li className="mb-4">
            {" "}
            {/* Add margin-bottom class */}
            Experience with database systems like{" "}
            <span className="text-lime-500">
              MongoDB, PostgreSQL, or MySQL.
            </span>
          </li>
          <li className="mb-4">
            {" "}
            {/* Add margin-bottom class */}
            Knowledge of authentication and authorization mechanisms such as
            <span className="text-lime-500">JWT</span>.
          </li>
          <li>
            {" "}
            {/* No margin-bottom class for the last item */}
            Familiarity with serverless architectures and cloud platforms like
            <span className="text-lime-500">AWS or Azure is a plus</span>.
          </li>
        </ul>
      </div>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <TextInput
          type="text"
          placeholder="Education"
        
          required
        />
        <TextInput
          type="number"
          placeholder="Years of Experience"
         
          required
        />
        <TextInput
          type="text"
          placeholder="LinkedIn Profile"
     
          required
        />
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload Resume
          </Button>
        </div>
              <textarea
                  className="bg-white dark:bg-gray-500 text-white"
          placeholder="Cover Letter (Optional)"
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button
          outline
          type="submit"
          gradientDuoTone="cyanToBlue"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Apply Now"}
        </Button>
      </form>
    </div>
  );
}
