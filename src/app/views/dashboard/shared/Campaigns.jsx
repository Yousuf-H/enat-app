import { Small } from "app/components/Typography";
import { EnatProgressBar, SimpleCard } from "app/components";

export default function LessonProgress() {
  return (
    <div>
      <SimpleCard title="Lesson Progress">
        <Small color="text.secondary">Today</Small>
        <EnatProgressBar value={90} color="primary" text="Vocabulary (90%)" />
        <EnatProgressBar value={50} color="secondary" text="Grammar (50%)" />
        <EnatProgressBar value={30} color="primary" text="Pronunciation (30%)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <EnatProgressBar value={90} color="primary" text="Vocabulary (90%)" />
        <EnatProgressBar value={60} color="secondary" text="Grammar (60%)" />
        <EnatProgressBar value={40} color="primary" text="Pronunciation (40%)" />

        <Small color="text.secondary" display="block" pt={4}>
          Last Week
        </Small>
        <EnatProgressBar value={95} color="primary" text="Vocabulary (95%)" />
        <EnatProgressBar value={70} color="secondary" text="Grammar (70%)" />
        <EnatProgressBar value={50} color="primary" text="Pronunciation (50%)" />
      </SimpleCard>
    </div>
  );
}
