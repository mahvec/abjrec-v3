import React, { useState } from "react";
import Lottie from "react-lottie-player";
import FormPeople from "../../form-people.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schemas/FormSchema";
import { states } from "../State";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

function FormPage() {
  const [selectedFile, setSelectedFile] = useState([]);
  const [fileBase64String, setFileBase64String] = useState("");
  const [, setState] = useState();
  const [lga, setLga] = useState([]);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const location = useLocation();
  const job = location.state.job;
  console.log(job);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cover_letter: "",
      state: "",
      local_government: "",
      linkedin_profile: "",
      nin: "",
    },
  });
  console.log(errors);

  const { pathname } = useLocation();
  const jobId = pathname.split("/")[2];
  console.log(jobId);

  function handleState(event) {
    setState(event.target.value);
    setLga(
      states.find(({ state }) => state.name === event.target.value).state.locals
    );
  }

  const onFileChange = (e) => {
    setSelectedFile(e.target.files);
  };

  const encodeFileBase64 = (file) => {
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var Base64 = reader.result;
        console.log(Base64);
        setFileBase64String(Base64);
      };
      reader.onerror = (error) => {
        console.log("error", error);
      };
    }
  };

  encodeFileBase64(selectedFile[0]);

  const submitForm = (data) => {
    encodeFileBase64(selectedFile[0]);
    data.resume = fileBase64String;

    console.log(data);
    axios
      .post(
        `https://zen-spence.52-41-168-181.plesk.page/api/v1/job/${jobId}/apply`,
        data
      )
      .then((response) => {
        console.log(response);
        navigate("/success");
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("There was an error submitting your application.");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="p-3 md:grid md:grid-cols-2 max-w-[1440px] mx-auto ">
        <div className="md:col-span-1 h-fit md:h-full justify items-center">
          <div className=" text-center my-auto h-fit pt-14">
            <p className="text-xl md:text-3xl overflow-hidden p-0 pt-20 font-bold uppercase text-[#b9332f]">
              One Step Closer To Your Dream Job
            </p>
          </div>
          <div className="h-fit mx-auto my-auto overflow-hidden pt-10 justify-center items-center ">
            <Lottie
              loop
              animationData={FormPeople}
              play
              className="w-2/4 mx-auto md:block xs:hidden p-0 m-0  h-auto"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col justify-center items-center">
          <p className="text-[#03256C] text-md uppercase font-semibold">
            Fill In Your Details
          </p>
          <div className="w-full p-4">
            <form onSubmit={handleSubmit(submitForm)}>
              {/* full name */}
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-600 focus:text-blue-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter fullname"
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <p className="text-red-600">{errors.name?.message}</p>
              </div>

              {/* email */}
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-600 focus:text-blue-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="user@example.com"
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>

              {/* phone number */}
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-gray-600 focus:text-blue-600"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  {...register("phone", { required: true })}
                  placeholder="080********"
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <p className="text-red-600">{errors.phone?.message}</p>
              </div>

              {/* Role */}
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="cover_letter"
                  className="text-sm font-semibold text-gray-600 focus:text-blue-600"
                >
                  Role
                </label>
                <input
                  type="text"
                  value={job.title}
                  {...register("cover_letter", { required: true })}
                  required
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <p className="text-red-600">{errors.cover_letter?.message}</p>
              </div>

              {/* state and local_government */}
              <div className="grid md:grid-cols-2 md:gap-4">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="state"
                    className="text-sm font-semibold text-gray-600"
                  >
                    State of Residence
                  </label>
                  <select
                    {...register("state", { required: true })}
                    onChange={handleState}
                    className="w-full text-sm border-0 border-b-2 capitalize border-gray-300 focus:ring-0 focus:border-blue-600 focus:outline-none bg-transparent"
                  >
                    {states.map(({ state }) => {
                      return (
                        <option value={state.name} key={state.id} className="">
                          {state.name}
                        </option>
                      );
                    })}
                  </select>
                  <p className="text-red-600">{errors.state?.message}</p>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="local_government"
                    className="text-sm font-semibold text-gray-600"
                  >
                    L.G.A
                  </label>
                  <select
                    {...register("local_government", { required: true })}
                    id="local_government"
                    className="w-full text-sm border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-600 focus:outline-none bg-transparent"
                  >
                    {lga.map((lg) => {
                      return (
                        <option value={lg.name} key={lg.id}>
                          {lg.name}
                        </option>
                      );
                    })}
                  </select>
                  <p className="text-red-600">
                    {errors.local_government?.message}
                  </p>
                </div>
              </div>

              {/* resume */}
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="resume"
                  className="text-sm font-semibold text-gray-600 focus:text-blue-600"
                >
                  CV
                </label>

                <input
                  type="file"
                  //   {...register("resume", { required: true })}
                  accept=".pdf"
                  onChange={onFileChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <p className="text-red-600">{errors.resume?.message}</p>
              </div>

              {/* linkedin profile */}
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="linkedin_profile"
                  className="text-sm font-semibold text-gray-600 focus:text-blue-600"
                >
                  Linkedin Profile
                </label>
                <input
                  type="text"
                  {...register("linkedin_profile", { required: true })}
                  placeholder=""
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <p className="text-red-600">
                  {errors.linkedin_profile?.message}
                </p>
              </div>

              {/* NIN */}
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="nin"
                  className="text-sm font-semibold text-gray-600 focus:text-blue-600"
                >
                  NIN
                </label>
                <input
                  type="text"
                  {...register("nin", { required: true })}
                  placeholder=""
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <p className="text-red-600">{errors.nin?.message}</p>
              </div>

              {/* submit button */}
              <div>
                <button
                  type="submit"
                  className="bg-blue-800 w-full mt-2 h-10 rounded-lg text-md font-semibold text-white hover:bg-blue-600 shadow-md p-1 px-4 relative items-end"
                >
                  submit
                </button>
              </div>
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FormPage;
