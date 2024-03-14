import { Modal, Table, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function DashLeave() {
  const { currentUser } = useSelector((state) => state.user);
  const [leaves, setLeaves] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [leaveIdToDelete, setLeaveIdToDelete] = useState("");

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const res = await fetch(`/api/leave/getLeaves`);
        const data = await res.json();
        if (res.ok) {
          setLeaves(data.leaves);
          if (data.leaves.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchLeaves();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = leaves.length;
    try {
      const res = await fetch(`/api/leave/getLeaves?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setLeaves((prev) => [...prev, ...data.leaves]);
        if (data.leaves.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteLeave = async () => {
    try {
      const res = await fetch(`/api/leave/delete/${leaveIdToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setLeaves((prev) =>
          prev.filter((leave) => leave._id !== leaveIdToDelete)
        );
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "orange";
      case "rejected":
        return "red";
      case "approved":
        return "green";
      default:
        return "inherit";
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && leaves.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>From</Table.HeadCell>
              <Table.HeadCell>To</Table.HeadCell>
              <Table.HeadCell>Reason</Table.HeadCell>
              <Table.HeadCell>Document</Table.HeadCell>
              <Table.HeadCell>Leave Status</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {leaves.map((leave) => (
              <Table.Body className="divide-y" key={leave._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(leave.startDate).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    {new Date(leave.endDate).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{leave.reason}</Table.Cell>
                  <Table.Cell>
                    <a
                      href={leave.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Document
                    </a>
                  </Table.Cell>
                  <Table.Cell style={{ color: getStatusColor(leave.status) }}>
                    {leave.status}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setLeaveIdToDelete(leave._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no leave requests yet!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this leave request?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteLeave}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
