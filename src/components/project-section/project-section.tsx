import "./project-section.css";
export default function ProjectSection() {
  return (
    <>
      <div
        id="projects"
        className="  text-5xl font-semibold flex w-full justify-start pl-20 bg-red-500 text-white h-[10vh] items-center sticky left-0 top-0 z-50 mt-40"
      >
        Projects
      </div>
      <div className="h-[90vh] w-full flex flex-col items-center relative">
        <div className="flex project-row gap-5  mt-5">
          <a
            href="https://sketchfab.com/3d-models/character-jommarn-706b328e6b6642dcab722cd69baca6ea?fbclid=IwY2xjawF8YkFleHRuA2FlbQIxMAABHVp3PUPV_hNN5uNv0oCO1e5V3SongU5X7F1A0Pkz6Lfvwc-rBkn69PlHSQ_aem_hhGlon0zQMhQcCbvhUt6mQ"
            target="_blank"
          >
            <img src="./images/6.png" />
          </a>
          <a
            href="https://sketchfab.com/3d-models/jommarn-winterr-2cdd0e8b97844d07b11363c61521d48a?fbclid=IwY2xjawF8YlNleHRuA2FlbQIxMAABHWPUwknamB4Z5ycFrMQZ00xDQcNz1zOPjA9cgaYy4dowocHQ9ybQ8UPVnw_aem_sRDUsyzzF5crFGl1I8AG9A"
            target="_blank"
          >
            <img src="./images/3.png" />
          </a>
          <a
            href="https://sketchfab.com/3d-models/jommarn-with-nagini-7ae7d543857a4bf485b65be80caf4120?fbclid=IwY2xjawF8YmdleHRuA2FlbQIxMAABHaZQuo6f5rsckyPvGg6bQZViehKP13k57Xo50Jg5yyQYEOv6AHNXAKX5TA_aem_hf_OXYmgHSH_jOGbrDGVmw"
            target="_blank"
          >
            <img src="./images/5.png" />
          </a>
        </div>
        <div className="flex project-row gap-5 mt-5">
          <a
            href="https://sketchfab.com/3d-models/652110232-domemie-finalworkdesk-49cf134c2af941cf93e7eaa0363e0472?fbclid=IwY2xjawF8YQ9leHRuA2FlbQIxMAABHWPUwknamB4Z5ycFrMQZ00xDQcNz1zOPjA9cgaYy4dowocHQ9ybQ8UPVnw_aem_sRDUsyzzF5crFGl1I8AG9A"
            target="_blank"
          >
            <img src="./images/1.png" />
          </a>
          <a
            href="https://sketchfab.com/3d-models/jommarn-student-83eff922ce6c4713aba5c11108dca634?fbclid=IwY2xjawF8YeFleHRuA2FlbQIxMAABHaZQuo6f5rsckyPvGg6bQZViehKP13k57Xo50Jg5yyQYEOv6AHNXAKX5TA_aem_hf_OXYmgHSH_jOGbrDGVmw"
            target="_blank"
          >
            <img src="./images/4.png" />
          </a>
          <a
            href="https://sketchfab.com/3d-models/scene-room-hong-prung-ya-c851ee3633e14e859397b4a5360236ae?fbclid=IwY2xjawF8Yf9leHRuA2FlbQIxMAABHa2m1jiiXDJlYRso9zicLYCe8GV6iK0LnW3RGCL7xDriIDtNY3OdmxoEmw_aem_ScMDysndBwZbMQx4nyMhUw"
            target="_blank"
          >
            <img src="./images/2.png" />
          </a>
        </div>
      </div>
    </>
  );
}
