"use client";
import { useRouter } from "next/navigation";

function NavBarButton({ icon = "", mode = "" }) {
  const router = useRouter();

  const navigationHandler = () => {
    switch (icon) {
      case "home":
        router.push("/");
        break;
      case "search":
        router.push("/search");
        break;
      case "archive":
        router.push("/archived-notes");
        break;
      case "tag":
        router.push("/tags");
        break;
      case "settings":
        router.push("/settings");
        break;
      case "newnote":
        router.push("/new-note");
        break;
      default:
        router.push("/");
    }
  };

  return (
    <button
      onClick={navigationHandler}
      className="w-[62px] h-8 border-neutral-50 flex justify-center items-center cursor-pointer hover:bg-neutral-700 hover:rounded-sm"
    >
      <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
    </button>
  );
}

export default NavBarButton;
