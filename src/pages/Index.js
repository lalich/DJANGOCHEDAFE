import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const cheezes = useLoaderData()

    // map over the todos and create a Post component for each todo
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Churn a Cheeze</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Cheeze Name"/>
            <input type="text" name="spice_level" placeholder="1-10 Spice Lvl"/>
            <button>Churn a new Cheeze</button>
        </Form>
    </div>
    {cheezes.map((cheeze) => <Post key={cheeze.id} post={cheeze}/>)}
    </>

}

export default Index;