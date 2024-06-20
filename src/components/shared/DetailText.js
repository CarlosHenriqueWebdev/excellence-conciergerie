export default function DetailText({ text }) {
  return (
    <div className="w-fit flex gap-[8px] items-center text-[12px] text-light-gray">
      <img src="/assets/images/star.png" alt="Star Icon" className="h-[14px]" />
      <span className="tracking-[2px] font-bold uppercase">{text}</span>
    </div>
  );
}
