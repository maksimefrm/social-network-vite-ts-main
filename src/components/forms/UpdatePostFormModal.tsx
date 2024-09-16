import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { Button, Input } from "../UI";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdatePostMutation } from "../../Store/api/postApi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const schema = yup.object({
    newPostText: yup.string().required("Создайте пост для публикации"),
  })

interface IUpdatePostForm {
  newPostText: string;
}

export const UpdatePostFormModal = ({postId}: {postId: number}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      newPostText: "",
    },
  });

  const [updatePost, {data, isLoading}] = useUpdatePostMutation()

  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if(data?.status === 1) {
        closeModal() 
    }
  }, [data])

  const onSubmit: SubmitHandler<IUpdatePostForm> = (data) => {
    updatePost({post_id: postId, new_text: data.newPostText})
  };

  return (
    <div>
      <button onClick={openModal}>Изменить</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="newPostText"
            render={({ field }) => (
              <Input
                type={"text"}
                placeholder={"Введите текст поста"}
                {...field}
                isError={errors.newPostText ? true : false}
                errorMessage={errors.newPostText?.message}
              />
            )}
          />
          <Button text={"Подтвердить"} type={"submit"} isLoading={isLoading}/>
          <Button text={"Закрыть"} type={"button"} onClick={closeModal}/>
        </form>
      </Modal>
    </div>
  );
};
