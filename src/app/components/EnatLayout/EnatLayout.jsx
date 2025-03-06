import { EnatSuspense } from "app/components";
import useSettings from "app/hooks/useSettings";
import { EnatLayouts } from "./index";

export default function EnatLayout(props) {
  const { settings } = useSettings();
  const Layout = EnatLayouts[settings.activeLayout];

  return (
    <EnatSuspense>
      <Layout {...props} />
    </EnatSuspense>
  );
}
