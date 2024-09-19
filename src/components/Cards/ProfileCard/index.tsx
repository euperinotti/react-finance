import { ProfileCardItem } from "./Item";

export const ProfileCard = () => {
  return (
    <div className="w-full p-5 bg-gray-50 rounded-md border border-slate-100 flex flex-col gap-2">
      <ProfileCardItem title="Name" description="Guilherme Perinotti" />
      <ProfileCardItem title="Job" description="Fullstack Developer" />
      <ProfileCardItem
        title="Biography"
        description="I love resolving problems. I am always in search of knowledge and
              ways to put into practice the knowledge I have acquired. I am
              currently pursuing higher education at Centro Universitário
              Fundação Assis Gurgacz, where I have also been working as a Full
              Stack developer since 2023.
            "
      />
      <ProfileCardItem title="Github">
        <a
          href="https://github.com/euperinotti"
          className="text-sky-500 text-lg m-0 underline"
        >
          euperinotti
        </a>
      </ProfileCardItem>
    </div>
  );
};
