import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/map/Map"), {
  ssr: false,
});
export default function Home() {
  return <DynamicComponent />;
}
