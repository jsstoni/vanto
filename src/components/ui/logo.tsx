interface Props {
  size: number;
}
export function Logo({ size }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-slate-600 dark:fill-white"
    >
      <path d="M22.6129 69.1657C15.2813 61.6698 8.08219 54.2473 0.789033 46.907C-0.335542 45.7752 -0.205548 45.1635 0.846842 44.1349C11.7915 33.4381 22.6893 22.6992 33.6023 11.9738C37.4616 8.1809 41.3661 4.42737 45.1574 0.575636C45.9642 -0.243924 46.3047 -0.139478 46.993 0.580362C49.3872 3.08453 51.7413 5.63406 54.3083 7.97573C55.412 8.98255 55.0507 9.41869 54.2303 10.208C48.4008 15.816 42.6092 21.4586 36.7964 27.0818C30.7432 32.9377 24.7233 38.8251 18.5794 44.5963C17.5035 45.6069 18.3811 45.9421 18.8357 46.4164C24.4655 52.2891 30.124 58.1376 35.7807 63.9876C38.5627 66.8647 41.3238 69.7605 44.1681 72.5825C44.8478 73.2569 44.9353 73.6215 44.1868 74.2565C41.1679 76.8179 38.1894 79.4212 35.2065 82C31.3077 78.0257 27.0112 73.6459 22.6129 69.1657Z" />
      <path d="M74.6184 28.7107C81.8148 36.5163 88.8801 44.2443 96.041 51.8897C97.1451 53.0686 97.0042 53.6928 95.9336 54.728C84.7994 65.493 73.7112 76.302 62.6082 87.0968C58.6817 90.9143 54.7106 94.6907 50.851 98.5696C50.0297 99.3949 49.6911 99.282 49.0158 98.5327C46.6668 95.9261 44.3585 93.2737 41.8338 90.8305C40.7483 89.78 41.1173 89.3396 41.9518 88.5454C47.8806 82.9033 53.7722 77.225 59.6846 71.567C65.8416 65.6748 71.9659 59.7498 78.212 53.946C79.3058 52.9296 78.4343 52.571 77.9883 52.0773C72.4643 45.964 66.9112 39.875 61.36 33.7845C58.6299 30.7892 55.9209 27.775 53.1275 24.835C52.46 24.1323 52.379 23.7573 53.1387 23.12C56.203 20.5493 59.2275 17.9349 62.2562 15.3456C66.0833 19.4843 70.3009 24.0452 74.6184 28.7107Z" />
    </svg>
  );
}
