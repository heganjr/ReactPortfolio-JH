import jacobImage from "../images/ruby-dog.jpg";

const Experience = () => {
  return (
    <div class="background-image">
      <ul id="text-experience">
        <p>Experience includes:</p>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>Node.js</li>
      </ul>
      <img
        class="personal-image"
        src={jacobImage}
        alt="Jacob Hegan"
      />
    </div>
  );
};

export default Experience;
