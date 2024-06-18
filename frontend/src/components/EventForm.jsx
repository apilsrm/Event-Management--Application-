import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const EventForm = ({ onSubmit, initialValues = {} }) => {
  const { register, handleSubmit, setValue, errors } = useForm();

  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach(field => setValue(field, initialValues[field]));
    }
  }, [initialValues, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="event-form">
      {/* <input name="title" ref={register({ required: true })} placeholder="Title" /> */}
      <input name="title" {...register("title", {required:true})} placeholder="Title" />
      {errors && errors.title && <span>Title is required</span>}
 
      <textarea name="description" {...register("description", {required:true})} placeholder="Description"></textarea>
      {errors && errors.description && <span>Description is required</span>}

      <input name="totalParticipants" {...register("totalParticipants", {required:true, min:1})} placeholder="Total Participants" type="number" />
      {errors && errors.totalParticipants && <span>Total Participants is required and should be a positive number</span>}

      <input name="startDate" {...register("startDate", {required:true})} placeholder="Start Date YYYY-MM-DD" type="date" />
      {errors && errors.startDate && <span>Start Date is required</span>}

      <input name="endDate" {...register("endDate", {required:true})} placeholder="End Date" type="date" />
      {errors && errors.endDate && <span>End Date is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
