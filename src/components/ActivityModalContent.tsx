
import { useStore } from "@nanostores/solid";
import WarlordsRuin from "../resources/images/loot/WarlordsRuin.jpg";
import { requestedActivity } from "../stores/activityStore";
import { DestinyActivityString } from "../utils/enums/strings/en/DestinyActivity";

export default function () {
    
    const $requestedActivity = useStore(requestedActivity);

	return (
		<div style="display: flex; flex-wrap: wrap; justify-content: center; width: 100vw;">
			<div style="width: 45vw; min-width: 480px; max-width: 1080px; flex-grow: 4">
				<img src={WarlordsRuin.src} style="width: 100%;" />
			</div>
			<div style="width: 55vw; flex-grow: 6;">
				<div style="color:#ffffffbf; font-family: 'Neue Haas Grotesk Text Pro','Helvetica', 'Arial', sans-serif; font-size: 16pt;">
					<div style="background: #ffffff1A; padding: 10px;">
						<div style="display: flex;">
							<div style="margin: auto; padding-top: 3pt;">
								<span style="font-size: 24pt; letter-spacing: 6pt; text-transform: uppercase;"> {DestinyActivityString[$requestedActivity()!]} </span>
							</div>
						</div>
					</div>
					<div style="padding: 15px;">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptatum voluptatem laudantium aut ullam totam, nulla sed
							maiores quis porro? Quam provident sint natus iste distinctio incidunt veritatis eveniet alias.
						</p>
						<p>
							Dolorem quas perspiciatis harum inventore reprehenderit enim illo. Animi facere corporis sunt unde voluptates harum, cupiditate ut
							illo totam repellendus, laboriosam temporibus.
						</p>

						<p>
							Quia ipsam error repudiandae animi ducimus ab, eius quam tempora aliquam vero facilis pariatur adipisci delectus voluptatibus illo!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
