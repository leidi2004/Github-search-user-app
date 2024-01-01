import iconCompany from "../assets/img/icon-company.svg";
import iconLocation from "../assets/img/icon-location.svg";
import iconTwitter from "../assets/img/icon-twitter.svg";
import iconWebsite from "../assets/img/icon-website.svg";

import PropTypes from "prop-types";

export const UserCard = ({ user }) => {
  return (
    <div className="light-shadow rounded-xl bg-white-100 px-5 py-4">
      <div className="mb-2 flex items-center gap-6 py-1 lg:gap-x-8">
        <img
          src={user.avatar_url}
          alt="icon"
          className="w-3/12 max-w-28 rounded-full"
        />
        <div>
          <p className="text-lg font-semibold text-github-600">{user.name}</p>
          <p className="text-github-200">{user.login}</p>
          <p>{`Joined ${user.created_at}`}</p>
        </div>
      </div>
      <p className="my-2 lg:ml-36">{user.bio}</p>
      <div className="w-full my-4 grid grid-cols-3 place-items-center rounded-lg bg-white-200 px-3 py-4 lg:w-3/4 lg:ml-36">
        <p>Repositories</p>
        <p>Followers</p>
        <p>Following</p>
        <p className="font-bold text-github-600 text-xl">{user.public_repos}</p>
        <p className="font-bold text-github-600 text-xl">{user.followers}</p>
        <p className="font-bold text-github-600 text-xl">{user.following}</p>
      </div>
      <div className="leading-9 flex flex-col md:flex-row md:gap-24 md:justify-center lg:ml-28
       lg:w-50 lg:gap-10">
        <div>
          <p>
            <img src={iconLocation} alt="location icon" /> {user.location}
          </p>
          <a href={user.blog} target="_blank" rel="noreferrer">
            <img src={iconWebsite} alt="link icon" /> {user.blog}
          </a>
        </div>
        <div>
          <p>
            <img src={iconTwitter} alt="twitter icon" /> {user.twitter_username}
          </p>
          <p>
            <img src={iconCompany} alt="building icon" /> {user.company}
          </p>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    bio: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    blog: PropTypes.string,
    twitter_username: PropTypes.string,
    company: PropTypes.string,
  }),
};
