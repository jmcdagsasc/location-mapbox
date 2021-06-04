import axios from "axios";
import { useState } from "react";

const StoreFinder = ({ location }) => {
  const [storeDetails, setStoreDetails] = useState("");
  const URL = "https://apiv4.ordering.co/v400/en/farmazone/business/";
  const params = {
    params: "id,name,slug,open,address,phone,cellphone,location",
    location: location.toString(),
  };
  console.log(params);

  axios.get(URL, params).then((res) => setStoreDetails(res.data.result));

  return (
    <div>
      <h1>
        {storeDetails.length
          ? "Tienda para entrega encontrada"
          : "Aún no llegamos a esta ubicación"}
      </h1>
      <pre>{JSON.stringify(storeDetails)}</pre>
    </div>
  );
};

export default StoreFinder;
