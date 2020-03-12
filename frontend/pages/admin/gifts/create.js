import React from "react";
import AdminPage from "../../../components/AdminPage";
import EditItem from "../../../components/EditItem";
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
              <EditItem registry={registry} />
            )}
          </AdminPage.Main>
        </>
      )}
    </AdminPage>
  );
};

export default CreateItemPage;
