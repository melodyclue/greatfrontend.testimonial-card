export const TestimonialCard = () => {
  return (
    <div className="w-[340px] bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <figure className="w-12 h-12 overflow-hidden rounded-full">
            <img
              src="/img/profile-thumbnail.png"
              alt="profile image"
              className="w-full h-full object-cover"
            />
          </figure>
          <div>
            <h1 className="font-semibold text-neutral-900">Sarah Dole</h1>
            <p className="text-neutral-600 text-sm">@sarahdole</p>
          </div>
        </div>

        <p className="text-neutral-600">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>
    </div>
  );
};
