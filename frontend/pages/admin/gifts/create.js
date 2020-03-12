import React from "react";
import AdminPage from "../../../components/AdminPage";
import CreateItem from "../../../components/CreateItem";
import GiftIcon from "@iconscout/react-unicons/icons/uil-gift";

const CreateItemPage = () => {
  return (
    <AdminPage>
      {registry => (
        <>
          <AdminPage.Header icon={<GiftIcon />} title="Add a new gift" />
          <AdminPage.Main>
            {!registry ? (
              <div>Loading...</div>
            ) : (
              <CreateItem registry={registry} />
            )}
          </AdminPage.Main>
        </>
      )}
    </AdminPage>
  );
};

export default CreateItemPage;
