import Blog from "../components/blog";
import SiteHeader from "../components/header";

export default function Root() {
    return (
      <div className="dark:bg-gradient-to-b from-slate-dark to-slate bg-white w-screen h-screen">
        <SiteHeader />
        <Blog />
      </ div>
    );
  }