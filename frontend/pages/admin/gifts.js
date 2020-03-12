import React from "react";
import { withLoginRequired } from "use-auth0-hooks";
import GiftIcon from "@iconscout/react-unicons/icons/uil-gift";
import AdminPage from "../../components/AdminPage";
import AdminItemsTable from "../../components/AdminItemsTable";
import Link from "../../components/Link";

const Gifts = () => (
  <AdminPage>
    {registry => (
      <>
        <AdminPage.Header icon={<GiftIcon />} title="Registry Gifts" />
        <AdminPage.Main>
          <div>
            <Link href={`/admin/gifts/create`}>Add a new gift</Link>
            <br />
            <br />
            {!registry ? (
              <div>Loading...</div>
            ) : (
              <AdminItemsTable registry={registry} />
            )}
          </div>
        </AdminPage.Main>
      </>
    )}
  </AdminPage>
);

export default withLoginRequired(Gifts);
