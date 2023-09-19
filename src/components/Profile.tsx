import { useUserContext } from "@/contexts/User";
import { ExternalLink, Building, Users2, GithubIcon } from "lucide-react";

const Profile = () => {
  const { user } = useUserContext();
  return (
    <div className="relative z-10 mx-auto -mt-28 flex max-w-[1000px] flex-col items-center gap-8 rounded-md bg-base-profile p-8 sm:flex-row">
      <img
        src={user.avatar_url}
        className="aspect-square max-w-[148px] rounded-md object-cover"
      />

      <div className="flex w-full flex-col items-center justify-center sm:items-start">
        <div className="flex items-center gap-4 sm:justify-between">
          <h1 className="text-2xl font-bold text-base-title">{user.name}</h1>
          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            className="flex items-end justify-center gap-2 text-sm font-bold uppercase text-base-blue"
          >
            Github
            <ExternalLink />
          </a>
        </div>

        <p className="text-md mb-2 mt-2 flex-1 leading-relaxed text-base-text">
          {user.bio}
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-base-subtitle">
            <GithubIcon className="stroke-base-label" />
            <span>{user.login}</span>
          </div>
          {user.company && (
            <div className="flex items-center gap-2 text-base-subtitle">
              <Building className="stroke-base-label" />
              <span>{user.company}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-base-subtitle">
            <Users2 className="stroke-base-label" />
            <span>{user.followers} followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
