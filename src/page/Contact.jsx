import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.enum(["Support", "Feedback", "General"], {
    required_error: "Please select a subject",
  }),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function Contact() {
 const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState: { errors } } = form;
 
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <section >
        <small className="mb-3 inline-block">
            <a href="/" className="mr-1 font-semibold text-gray-600 capitalize">home</a>
             &gt; <span className="font-semibold capitalize text-purple-800">contact Us</span>
        </small>
      <h3 className="text-3xl font-semibold mb-5 max-w-lg mx-auto border-b text-gray-900 ">Contact me</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 max-w-lg mx-auto "
      >
        {/* Full Name */}
        <div>
          <label className="block font-semibold text-gray-600 ">Full Name</label>
          <input
            {...register("name")}
            className="border p-1 px-2 font-semibold text-base rounded w-full"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold text-gray-600">Email</label>
          <input
            {...register("email")}
            type="email"
            className="border p-1 px-2 font-semibold text-base rounded w-full"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block font-semibold text-gray-600">Subject</label>
          <select
            {...register("subject")}
            className="border p-1 px-2 font-semibold text-base rounded w-full"
          >
            <option value="">Select a Subject </option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="General">General Inquiry</option>
          </select>
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-semibold text-gray-600">Message</label>
          <textarea
            {...register("message")}
            rows="5"
            className="border p-1 px-2 font-semibold text-base rounded w-full"
            placeholder="Write your message here..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-purple-500 border font-semibold tracking-wider text-white px-3 w-full py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
