import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import Base from "../Component/Base";
import { useFormik } from "formik";
import { studentValidationSchema } from "../Component/Create";

const TeacherCreating = ({ setTeacherdata, TeacherData }) => {
  // const [name, setName] = useState("");
  // const [img, setimg] = useState("");
  // const [gender, setgender] = useState("");
  // const [experience, setexperience] = useState("");
  // const [subject, setsubject] = useState("");

  const history = useHistory();
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        batch: "",
        age: "",
        img: "",
        gender: "",
        bloodGroup: "",
      },
      validationSchema: studentValidationSchema,
      onSubmit: (newTeacher) => {
        addTeacher(newTeacher);
      },
    });

  const addTeacher = async (newTeacher) => {
    try {
      // const newTeacher = {
      //   name,
      //   img,
      //   experience,
      //   subject,
      //   gender
      // };
      const response = await fetch(
        "https://63ae5bbdceaabafcf1782371.mockapi.io/Teacher",
        {
          method: "POST",
          body: JSON.stringify(newTeacher),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setTeacherdata([...TeacherData, data]);
      // setName("");
      // setimg("");
      // setgender("");
      // setexperience("");
      // setsubject("");
      history.push("/teacher-user");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Base>
      <Box className="Createstudentfield">
        <Box className="studenttitle">
          <Typography variant="h2" component="h6">
            Create a New Teacher
          </Typography>
        </Box>
        <Box className="textfield">
          <form onSubmit={handleSubmit}>
            <TextField
              className="InputText"
              onBlur={handleBlur}
              id="demo-helper-text-aligned"
              onChange={handleChange}
              value={values.name}
              name="name"
              label="Name"
            />
            <div className="errorText">
              {touched.name && errors.name ? errors.name : ""}
            </div>
            <TextField
              className="InputText"
              onBlur={handleBlur}
              id="demo-helper-text-aligned"
              onChange={handleChange}
              value={values.batch}
              name="batch"
              label="Batch"
            />
            <div className="errorText">
              {touched.batch && errors.batch ? errors.batch : ""}
            </div>
            <TextField
              className="InputText"
              onBlur={handleBlur}
              id="demo-helper-text-aligned"
              onChange={handleChange}
              value={values.age}
              name="age"
              label="Age"
            />
            <div className="errorText">
              {touched.age && errors.age ? errors.age : ""}
            </div>
            <TextField
              className="InputText"
              onBlur={handleBlur}
              id="demo-helper-text-aligned"
              onChange={handleChange}
              value={values.gender}
              name="gender"
              label="Gender"
            />
            <div className="errorText">
              {touched.gender && errors.gender ? errors.gender : ""}
            </div>
            <TextField
              className="InputText"
              onBlur={handleBlur}
              id="demo-helper-text-aligned"
              onChange={handleChange}
              value={values.img}
              name="img"
              label="Image"
            />
            <div className="errorText">
              {touched.img && errors.img ? errors.img : ""}
            </div>
            <TextField
              className="InputText"
              onBlur={handleBlur}
              id="demo-helper-text-aligned"
              onChange={handleChange}
              value={values.bloodGroup}
              name="bloodGroup"
              label="Bloodgroup"
            />
            <div className="errorText">
              {touched.bloodGroup && errors.bloodGroup ? errors.bloodGroup : ""}
            </div>
            <Button
              size="small"
              color="primary"
              type="submit"
              // onClick={addStudent}
              variant="contained"
            >
              Add Teacher
            </Button>
          </form>
        </Box>
      </Box>
    </Base>
  );
};

export default TeacherCreating;
