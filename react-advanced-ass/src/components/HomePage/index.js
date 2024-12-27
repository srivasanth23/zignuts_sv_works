import { useState, useEffect } from "react";
import LoaderView from "../LoaderView/index";
import EditModal from "../ModalComponent";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi2";
import { CiGlobe, CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

function HomePage() {
  const [fetchData, setfetchData] = useState([]);
  const [fetching, setfetching] = useState(false);
  const [liked, setliked] = useState({}); // Track all liked IDs
  const [isModalOpened, setIsModelOpened] = useState(false);
  const [currentState, setCurrentState] = useState(null); // For tracking current model

  // Used to fetch data from API
  useEffect(() => {
    // Start loader view
    setfetching(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setfetchData(data);
        // Stop loader view
        setfetching(false);
      });
  }, []);

  // Toggle liked status
  const toggleLiked = (id) => {
    setliked((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the current like status
    }));
  };

  // Delete a user
  const deleteUser = (id) => {
    setfetchData((prev) => prev.filter((user) => user.id !== id));
  };

  // Open modal
  const openEditModel = (user) => {
    setIsModelOpened(true);
    setCurrentState(user);
  };

  // Close modal
  const closeEditModel = () => {
    setIsModelOpened(false);
    setCurrentState(null);
  };

  // Save the current modal
  const saveModel = (updatedUser) => {
    if (!updatedUser || !updatedUser.id) {
      console.error("Invalid user data for updating");
      return;
    }
    setfetchData((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsModelOpened(false); // Close modal after save
  };

  return (
    <section className="p-5">
      {fetching ? (
        // Loader View
        <LoaderView />
      ) : (
        <div className="d-flex flex-wrap flex-row gap-4">
          {fetchData.map((each) => (
            <div
              key={each.id}
              className="border border-2 pb-4"
              style={{ height: "400px", width: "330px" }}
            >
              {/* Image container */}
              <div className="bg-secondary h-50 w-100 d-flex flex-row justify-content-center items-center">
                <img
                  src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735281522/Screenshot_2024-12-26_164711_ea70h5.png"
                  alt="profile-img"
                  className="h-100"
                />
              </div>
              {/* Bottom Content container */}
              <div>
                <div className="p-3 d-flex flex-column justify-content-start">
                  <h1 className="fw-semibold fs-6 mb-3">{each.name}</h1>
                  <div className="d-flex flex-row justify-content-bottom">
                    <MdOutlineMail size={25} color="grey" />
                    <p className="px-2 mb-2">{each.email}</p>
                  </div>
                  <div className="d-flex flex-row justify-content-bottom">
                    <HiOutlinePhone size={25} color="grey" />
                    <p className="px-2 mb-2">{each.phone}</p>
                  </div>
                  <div className="d-flex flex-row justify-content-bottom">
                    <CiGlobe size={25} color="grey" />
                    <p className="px-2 mb-2">{each.website}</p>
                  </div>
                </div>
                {/* Content modifying components */}
                <div className="d-flex flex-row justify-content-around border-top border-2">
                  <button
                    className="align-item-center bg-transparent btn btn-outline-transparent"
                    onClick={() => toggleLiked(each.id)}
                  >
                    {liked[each.id] ? (
                      <FaHeart color="red" size={25} />
                    ) : (
                      <FaRegHeart color="red" size={25} />
                    )}
                  </button>
                  <div className="border border-left p-0 m-0"></div>
                  <button
                    className="align-item-center bg-transparent btn btn-outline-transparent"
                    onClick={() => openEditModel(each)}
                  >
                    <CiEdit size={30} color="grey" />
                  </button>
                  <div className="border border-left p-0 m-0"></div>
                  <button
                    className="align-item-center bg-transparent btn btn-outline-transparent"
                    onClick={() => deleteUser(each.id)}
                  >
                    <AiOutlineDelete size={30} color="grey" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Render EditModal if opened */}
          {isModalOpened && (
            <EditModal
              currentUser={currentState}
              setCurrentUser={setCurrentState}
              onClose={closeEditModel}
              onSave={saveModel}
              isModalOpened={isModalOpened}
            />
          )}
        </div>
      )}
    </section>
  );
}

export default HomePage;
