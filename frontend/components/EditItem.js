import React from "react";
import { useForm } from "react-hook-form";
//import { mutate } from "swr";
import InputText from "./InputText";
import Button from "./Button";
import { adminFetchIt, AUTH0_API_IDENTIFIER } from "../utils";
import PropTypes from "prop-types";
import { useAuth } from "use-auth0-hooks";
import { registryType } from "../types";
import Link from "./Link";

const audience = AUTH0_API_IDENTIFIER;

const EditItem = ({ registry }) => {
  const { _id } = registry;
  const registryId = _id;
  const { accessToken } = useAuth({ audience });
  const { register, handleSubmit, errors /*,reset*/ } = useForm();
  const onSubmit = async formData => {
    await adminFetchIt(`/item/registry/${registryId}`, accessToken, {
      method: "POST",
      body: JSON.stringify(formData),
    });
    /*mutate("/registry/admin", async items => {
      const newItem = await adminFetchIt(
        `/item/registry/${registryId}`,
        accessToken,
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      console.log(items);
      const updatedItems = [...items, newItem];
      return { ...registry, items: updatedItems };
    });
    reset();*/
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        id="name"
        error={errors.name}
        ref={register({ required: "Name is required" })}
      >
        Name
      </InputText>
      <InputText
        id="description"
        error={errors.description}
        type="textarea"
        ref={register}
      >
        Description
      </InputText>
      <InputText
        id="price"
        type="number"
        error={errors.price}
        ref={register({ required: "Price is required" })}
      >
        Price
      </InputText>
      <InputText
        id="link"
        error={errors.link}
        ref={register({ required: "Link is required" })}
      >
        Link
      </InputText>
      <InputText id="image" error={errors.image} ref={register}>
        Image
      </InputText>
      <Button type="submit">Submit</Button>
      {` `}
      <Link href="/admin/gifts">Back</Link>
    </form>
  );
};

export default EditItem;

EditItem.propTypes = {
  registry: PropTypes.shape(registryType),
};
