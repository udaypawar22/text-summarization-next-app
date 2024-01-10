import NavigationBar from "@/components/NavigationBar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const items = [
  { id: 1, title: "uhuwehfwie" },
  { id: 2, title: "sgregergerg" },
  { id: 3, title: "uhuwegerghfwie" },
  { id: 4, title: "aefafwefaewfeaw" },
  { id: 5, title: "ahreagargf" },
  { id: 6, title: "awefawefwerdwqdqwdqd" },
  { id: 7, title: "uhuwehfwie" },
  { id: 8, title: "sgregergerg" },
  { id: 9, title: "uhuwegerghfwie" },
  { id: 10, title: "aefafwefaewfeaw" },
  { id: 11, title: "ahreagargf" },
  { id: 12, title: "awefawefwerdwqdqwdqd" },
  { id: 13, title: "uhuwehfwie" },
  { id: 14, title: "sgregergerg" },
  { id: 15, title: "uhuwegerghfwie" },
  { id: 16, title: "aefafwefaewfeaw" },
  { id: 17, title: "ahreagargf" },
  { id: 18, title: "awefawefwerdwqdqwdqd" },
];

export default async function History() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <NavigationBar />
      <div className="h-[calc(100vh-80px)] px-8 py-6 grid grid-cols-[1fr_3fr]">
        <div className="shadow dark:shadow-gray-800 rounded-xl py-8 px-6 overflow-y-scroll thin-scroll">
          {items.map((item) => (
            <p
              key={item.id}
              className="hover:bg-gray-100 dark:hover:bg-zinc-950 p-2 rounded-lg cursor-pointer"
            >
              {item.title}
            </p>
          ))}
        </div>
        <div className="overflow-y-scroll thin-scroll dark:border-white px-8 py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum magni et
          eos, assumenda rerum veritatis commodi, repellat quo doloremque dolor
          sed, quos totam impedit excepturi dolorum quaerat. Minima vel sit,
          blanditiis ab alias earum dolore libero ipsam quod voluptate qui
          facere, minus quia deleniti debitis quae placeat repellat similique
          voluptatem consectetur. Vitae quibusdam vero in dolorem consequuntur
          hic error iusto, itaque quisquam beatae placeat iure? Voluptatem culpa
          corporis odio asperiores! Laborum aut voluptatem molestias temporibus
          nam animi aliquam, alias veniam esse tenetur fuga neque, nulla
          consectetur possimus, tempora quo quis culpa expedita! Consectetur,
          architecto. Non quae obcaecati laudantium quam ratione. Vitae velit
          delectus aliquam odit? Ad, harum corporis. Nobis, dolorum dignissimos!
          Dolorum dicta corporis officia et atque eum, rerum unde suscipit harum
          sapiente possimus iusto sunt fuga qui, ipsum earum. Laborum dolor
          dicta similique, eum deserunt iste excepturi nihil error rem corporis
          incidunt recusandae saepe aperiam asperiores quae alias illo. Maiores
          saepe velit optio quo, assumenda dignissimos delectus ullam, explicabo
          consequatur est ipsa quas suscipit vero libero dolorum aliquam quam.
          Natus suscipit incidunt, iure necessitatibus rem officia assumenda
          quam nisi labore, provident corrupti, harum praesentium nobis!
          Necessitatibus, non beatae inventore odio officia quia, iusto
          explicabo vitae ipsam molestias laborum nam doloribus dolore nemo
          quibusdam totam eligendi sunt accusantium? A illum temporibus ut
          veniam quod minus rerum atque delectus in provident quisquam expedita
          laboriosam nobis quos ipsum assumenda, perspiciatis consectetur
          inventore laudantium aut fugiat nostrum voluptates! Explicabo possimus
          iste, saepe quisquam inventore voluptates, numquam distinctio modi
          quia, at officia. Ullam, quas amet perspiciatis quia assumenda numquam
          aspernatur quidem odio ipsa qui vero accusamus, fuga possimus. Eveniet
          incidunt et alias numquam ex! Non molestias temporibus provident?
          Laboriosam officia possimus cum! Quos minus provident iste
          necessitatibus mollitia eius totam magni vel porro exercitationem ipsa
          iure enim aliquid similique iusto impedit expedita, fugit officia
          consequatur vitae blanditiis nihil. Maxime natus dolor similique
          assumenda dolorem eos quaerat ipsa itaque! Laborum quibusdam porro
          assumenda nesciunt, officia alias deleniti quos. Quas laboriosam quis
          veniam debitis autem. Quod numquam, ab ratione dolore cumque ad a
          tempora, exercitationem, nulla quas iste? Eum nostrum in voluptate!
          Nihil quasi vero placeat minus blanditiis magnam voluptas obcaecati,
          perferendis doloremque culpa assumenda necessitatibus ipsam nesciunt
          accusantium suscipit, porro eos. Facilis est, quisquam pariatur neque
          soluta, numquam possimus necessitatibus magnam iusto suscipit nemo
          vero dignissimos cum quis dolore ut praesentium non modi
          exercitationem! Fugiat quisquam suscipit quidem quae beatae cumque
          illo sed mollitia doloribus unde quas animi aspernatur expedita
          corporis asperiores quibusdam, omnis eaque, libero at nihil! Rem ea
          natus itaque nisi reiciendis sint magnam distinctio fugiat, tempora
          optio voluptatum libero a nihil atque error, perferendis eum, voluptas
          saepe quis molestias aliquam molestiae! Molestiae vel, unde id error
          enim dolor! Esse dolor quod voluptatum, suscipit iusto dolore soluta,
          impedit aperiam odit perferendis nesciunt molestiae harum beatae autem
          vero tenetur veniam officia nostrum dolorum culpa, architecto fugit.
          Dolor dolore, culpa dolorem repellendus tempore magni molestiae
          quaerat eos iure officiis similique suscipit non, quae consectetur.
          Repellendus, ut magni? Sit facere blanditiis unde distinctio expedita
          error eaque ducimus repudiandae nemo, quisquam omnis nihil eius iste
          dolor fugiat repellendus reiciendis tenetur sequi ipsam tempora fuga
          dolore perferendis doloremque? Assumenda est nemo error, blanditiis
          tempore vitae officiis vero quibusdam! Nesciunt, aspernatur
          consectetur repellendus nostrum harum laboriosam odit modi asperiores
          similique accusamus debitis voluptas animi expedita, maiores quis
          exercitationem quisquam fuga quae facere ullam distinctio alias sunt
          provident. Illum architecto velit neque, voluptatum eos ab provident
          necessitatibus assumenda fuga, cupiditate cumque culpa aliquid quo
          dolore eveniet accusantium esse atque quasi laborum aspernatur,
          laudantium incidunt sed nemo odio? Corporis aut libero nulla velit?
          Repudiandae quia aliquam recusandae officiis quae sequi necessitatibus
          similique ad magni. Commodi iure obcaecati deserunt ducimus officiis,
          sint consectetur vitae aliquid consequuntur esse quam dolores
          veritatis quo aliquam optio at, nam voluptates. Ipsa, dolorem
          consequuntur! In eos odit labore, error sapiente porro officiis
          suscipit aliquid, dolor facere soluta magnam quaerat modi enim ad fuga
          vel quam alias quae debitis quibusdam minima. Adipisci cum amet
          ratione, possimus fugiat maxime repellat. Eveniet voluptatum beatae,
          consequatur excepturi nobis quam porro minus! Aliquam placeat illum
          est eligendi hic eum, nam consequatur voluptatibus voluptas quaerat!
          Aliquid sequi fugit sapiente adipisci soluta dolores sit officiis ab
          commodi, doloribus a rem atque odio maiores aspernatur! Cum, a
          molestias? Quod, itaque consequatur, nihil delectus saepe sequi
          explicabo vel omnis quasi similique expedita inventore. Cupiditate
          excepturi dolor ullam ex asperiores, cum harum adipisci sunt ipsum
          hic, repellat incidunt ab. Enim vero deleniti cum eos voluptatum,
          atque perspiciatis provident harum officiis ullam suscipit sed
          voluptatibus nostrum laboriosam iste dolorum amet nesciunt incidunt
          inventore perferendis. Porro voluptatum nobis, ipsa quidem tenetur
          fuga temporibus, esse corporis, fugiat mollitia dicta numquam totam.
          Ducimus, itaque culpa! Dolorem, reiciendis vero. Quaerat qui similique
          sapiente ut ratione molestiae maiores fugiat, et neque commodi
          repellendus facilis quasi quisquam odio illo. Sunt vero eos rerum
          beatae culpa, praesentium nobis totam, ad dolorem quaerat ut fugit
          nisi sint. Sint, esse aut minima nihil voluptate molestiae, ipsum
          autem rem ipsa vel et enim porro voluptatem sequi repudiandae? Eum
          doloremque sit maiores, nemo ad eligendi blanditiis in minima veniam
          qui non, expedita odit corporis. Vel voluptate velit quo? Quisquam
          quae impedit nostrum corrupti nam, est adipisci tenetur facilis
          molestiae in sit iste qui aspernatur rerum amet! Voluptates quibusdam
          iure, quisquam ut repellendus doloribus neque sed aperiam natus,
          consequatur architecto magni eveniet ab, cum reiciendis. Quibusdam sit
          error porro recusandae consequatur beatae labore nemo atque numquam,
          dignissimos quae ratione ab reprehenderit, minima ducimus rem
          reiciendis saepe consectetur mollitia quidem et! Libero officia
          perspiciatis iure accusamus fugit assumenda facilis perferendis natus
          quae. Ducimus porro ipsam, commodi tenetur adipisci soluta aut sunt
          culpa deserunt, asperiores dicta illum labore! Similique ullam
          perferendis consequuntur iusto numquam sed beatae pariatur, quibusdam,
          officia facere assumenda? Assumenda dicta maxime in ea magnam earum
          illum provident. At saepe est aut error nostrum laborum ipsa
          excepturi, vero dolorem ab esse consectetur dolore assumenda nesciunt,
          qui aspernatur odio fuga ipsam iure nihil perspiciatis tempora
          delectus enim nobis? Quisquam delectus aperiam esse, quaerat eius quae
          ipsum fuga vel qui. Ipsam, aperiam!
        </div>
      </div>
    </>
  );
}
