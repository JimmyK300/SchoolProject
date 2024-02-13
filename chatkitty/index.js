import ChatKitty from "@chatkitty/core";

export const chatkitty = ChatKitty.getInstance(
  "be1ac0b1-1f7f-4536-bc9f-04bb0c5dff0e"
);

// export function channelDisplayName(channel) {
//   if (channel.type === "DIRECT") {
//     return channel.members.map((member) => member.displayName).join(", ");
//   } else {
//     return channel.name;
//   }
// }
