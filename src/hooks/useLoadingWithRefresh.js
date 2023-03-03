import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";

// const REACT_APP_API_URL = "http://15.206.27.190:5500";
const REACT_APP_API_URL = "https://mibaio.in:5500";

export function useLoadingWithRefresh() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                // const { data } = await axios.get(
                //     `${REACT_APP_API_URL}/api/refresh`,
                //     {
                //         withCredentials: true,
                //     }
                // );
                // console.log(data);

                // dispatch(setUser(data));
                setLoading(false);
            } catch (err) {
                // console.log(err);
                // setLoading(false);
                setLoading(false);
            }
        })();
    }, []);

    return { loading };
}
