import { useEffect, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const Page404 = () => {

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [seconds, setSeconds] = useState(5);
    const timer = useRef();

    useEffect(() => {

        const tick = () => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }

        timer.current = setInterval(() => tick(), 1000);

    },
        []);

    useEffect(() => {

        if (seconds === 0) {
            setShouldRedirect(true);
            clearInterval(timer.current);
        }

    }, [seconds]);


    if (shouldRedirect) {
        return (
            <Redirect to="/" />
        );
    }
    else {
        return (
            <div className="container" style={{ marginTop: '175px' }}>
                <h1 className="display-4">Oops...</h1>
                <h1 className="display-1">404 Error!</h1>

                <p>The page you are looking for is not found.</p>
                <p>Redirecting to home in <span className="text-warning">{seconds}</span> seconds. </p>
                <Link className="btn btn-warning w-25" to="/home" >HOME</Link>
            </div>
        );
    }

}

export default Page404;