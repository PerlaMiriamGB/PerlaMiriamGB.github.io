const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <a href={data?.link}>
        <img
          src={data?.image}
          alt="Blog"
          className="w-50 h-50 object-cover mx-auto"
        />
        <div className="m-6">
          <p className="text-[10px] xs:text-[16px] font-bold text-gray-400 ">
            {data?.title}
          </p>
          <p className="text-[10px] xs:text-lg font-medium text-[#333333]">
            {data?.description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default MonoBlog;
