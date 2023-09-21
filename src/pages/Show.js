import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.spice_level}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update Cheeze</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="name"
            placeholder="Cheeze Name"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="spice_level"
            placeholder="1-10 Spice Lvl"
            defaultValue={post.spice_level}
          />
          <button>Update Cheeze</button>
          <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete this Cheda</button>
        </Form>
        </Form>
      </div>
      <Link to="/">Back to the Cheeze Farm</Link>
    </div>
  );
}

export default Show;