import React, { useEffect, useState } from "react";
import api from "../data/fetchData";
import { useParams } from "react-router-dom";

function JobDetail() {
  const [job, setJob] = useState();
  let { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJob(id);
      setJob(data);
    };
    fetch();
  }, [id]);
  return (
    <div>
      <h1>{job?.title}</h1>
    </div>
  );
}

export default JobDetail;
