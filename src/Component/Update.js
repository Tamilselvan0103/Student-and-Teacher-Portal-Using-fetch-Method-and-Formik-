import React, {useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Base from "./Base";
import { useFormik } from "formik";
import { useHistory, useParams } from "react-router-dom";
import { studentValidationSchema } from "./Create";

export function EditStudent({ studentdata, setStudentdata }) {
  const { id } = useParams();
  const [idx, setidx] = useState(id);
  // const [name, setName] = useState("");
  // // console.log(idx)

  // const [batch, setbatch] = useState("");
  // const [age, setage] = useState("");
  // const [img, setimg] = useState("");
  // const [gender, setgender] = useState("");
  // const [bloodGroup, setbloodgroup] = useState("");
  const history = useHistory();
  const student = studentdata[id];

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: student.name,
        batch: student.batch,
        age: student.age,
        img: student.img,
        gender: student.gender,
        bloodGroup: student.bloodGroup,
      },
      validationSchema: studentValidationSchema,
      onSubmit: (newstudent) => {
        UpdateStudentdata(newstudent);
      },
    });

  // useEffect(() => {
  //   setidx(student.id)
  //   setName(student.name);
  //   setbatch(student.batch);
  //   setage(student.age);
  //   setimg(student.img);
  //   setgender(student.gender);
  //   setbloodgroup(student.bloodGroup);
  // }, []);

  const UpdateStudentdata = async (newstudent) => {
    try {
      // const newstudent = {
      //   name,
      //   batch,
      //   age,
      //   img,
      //   gender,
      //   bloodGroup,
      // };
      // console.log(newstudent)
      const response = await fetch(
        `https://63ae5bbdceaabafcf1782371.mockapi.io/student/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(newstudent),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      studentdata[id] = newstudent;

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
            Edit Student Details
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
              Update Student
            </Button>
          </form>
        </Box>
      </Box>
    </Base>
  );
}
