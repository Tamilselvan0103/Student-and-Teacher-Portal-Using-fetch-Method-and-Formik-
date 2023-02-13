import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import Base from "./Base";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

export const studentValidationSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  batch: yup
    .string()
    .required("Please enter a batch")
    .min(5, "Enter your full 5 Charater code"),
  age: yup.number().required("Please enter your age"),
  img: yup.string(),
  gender: yup.string().required("Please enter your gender"),
  bloodGroup: yup.string().required("Please enter your Blood group"),
});

export function Create({ setStudentdata, studentdata }) {
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
      onSubmit: (newstudent) => {
        addStudent(newstudent);
      },
    });
  // const [name, setName] = useState("");
  // const [batch, setbatch] = useState("");
  // const [age, setage] = useState("");
  // const [img, setimg] = useState("");
  // const [gender, setgender] = useState("");
  // const [bloodGroup, setbloodgroup] = useState("");
  const history = useHistory();

  const addStudent = async (newstudent) => {
    try {
      //   const newstudent = {
      //   name,
      //   batch,
      //   age,
      //   img,
      //   gender,
      //   bloodGroup,
      // };
      // console.log(newstudent)
      const response = await fetch(
        "https://63ae5bbdceaabafcf1782371.mockapi.io/student",
        {
          method: "POST",
          body: JSON.stringify(newstudent),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setStudentdata([...studentdata, data]);
      // setName("");
      // setbatch("");
      // setage("");
      // setimg("");
      // setgender("");
      // setbloodgroup("");
      history.push("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Base>
      <Box className="Createstudentfield">
        <Box className="studenttitle">
          <Typography variant="h2" component="h6">
            Create a New Student
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
              Add Student
            </Button>
          </form>
        </Box>
      </Box>
    </Base>
  );
}

export default Create;
