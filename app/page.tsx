import ReviewForm from "@/components/ReviewForm";
import StarRating from "../components/Star";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-white">
      <ReviewForm />
    </div>
  );
}

{
  /* <main
      className="w-full h-screen flex flex-wrap justify-center items-center"
      style={{ backgroundColor: "#DDA0DD" }}
    >
      <ReviewForm />
    </main> */
}
