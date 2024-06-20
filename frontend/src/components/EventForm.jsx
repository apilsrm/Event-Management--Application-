import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import BackButton from './BackButton';
// import Spinner from "./Spinner";

const EventForm = ({onSubmit, initialValues = {} }) => {
  const { register, handleSubmit, setValue, errors } = useForm();

  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach(field => setValue(field, initialValues[field]));
    }
  }, [initialValues, setValue]);

  return (
    <>
    {/* { loading ? <Spinner /> : ""} */}
   <div className="p-4 flex flex-col border-2 border-green-300 rounded-xl w-[600px]  mx-auto">
  
   <form onSubmit={handleSubmit(onSubmit)} className="event-form">
      {/* <input name="title" ref={register({ required: true })} placeholder="Title" /> */}
      <input name="title" {...register("title", {required:true})} placeholder="Title"  className=" my-4 border-2 border-bue-500 px-4 py-2 w-full"/>
      {errors && errors.title && <span className="text-xl mr-2 text-red-500">Title is required</span>}
 
      <textarea name="description" {...register("description", {required:true})} placeholder="Description" className=" my-4 border-2 border-bue-500 px-4 py-2 w-full" ></textarea>
      {errors && errors.description && <span className="text-xl mr-2 text-red-500">Description is required</span>}

      <input name="totalParticipants" {...register("totalParticipants", {required:true, min:1})} placeholder="Total Participants" type="number" className=" my-4 border-2 border-bue-500 px-4 py-2 w-full" />
      {errors && errors.totalParticipants && <span className="text-xl mr-2 text-red-500">Total Participants is required and should be a positive number</span>}

      <input name="startDate" {...register("startDate", {required:true})} placeholder="Start Date YYYY-MM-DD" type="date" className=" my-4 border-2 border-bue-500 px-4 py-2 w-full" />
      {errors && errors.startDate && <span className="text-xl mr-2 text-red-500">Start Date is required</span>}

      <input name="endDate" {...register("endDate", {required:true})} placeholder="End Date" type="date" className=" my-4 border-2 border-bue-500 px-4 py-2 w-full" />
      {errors && errors.endDate && <span className="text-xl mr-2 text-red-500">End Date is required</span>}

      <button type="submit" className="p-2 bg-blue-400 m-8" >Submit</button>
    </form>
   </div>
    </>
  );
};

export default EventForm;
