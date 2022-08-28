import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, editTask, getTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="m-auto">
      <Formik
        enableReinitialize={true}
        initialValues={task}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (!params.id) {
            await createTask(values);
          } else {
            await editTask(params.id, values);
          }
          setTask({
            title: "",
            description: "",
          });
          navigate("/");
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 m-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit task" : "New task"}
            </h1>
            <label className="block capitalize">title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Write a title"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full capitalize"
              value={values.title}
            />

            <label className="block capitalize">description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full capitalize"
              value={values.description}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 my-2 py-3 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
