import { useEffect, useState } from "react";

type TestProps = {
    a: string;
    b: string;
};


export const FriendStatus = (props:TestProps ) => {
    const [status, setStatus ] = useState(null);
    const [error, setError ] = useState(null);

    useEffect(() => {

    }, []);

    return { status, error  }
};