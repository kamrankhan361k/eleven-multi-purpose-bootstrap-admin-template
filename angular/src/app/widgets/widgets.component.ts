import { Component } from "@angular/core";

@Component({
  selector: "app-widgets",
  templateUrl: "./widgets.component.html",
  styleUrls: ["./widgets.component.scss"]
})
export class WidgetsComponent {
  stats = [
    {
      title: "Comments",
      value: 24
    },
    {
      title: "Likes",
      value: 45
    },
    {
      title: "Shares",
      value: 984
    }
  ];

  statCardImages = [
    `assets/images/unsplash/2.jpg`,
    `assets/images/unsplash/1.jpg`,
    `assets/images/unsplash/13.jpg`
  ];

  profileStatCardImages = [
    `assets/images/unsplash/4.jpg`,
    `assets/images/unsplash/5.jpg`
  ];

  postCardImages = [
    `assets/images/unsplash/1.jpg`,
    `assets/images/unsplash/15.jpg`
  ];

  feed = Array(3)
    .fill(0)
    .map((_, i) => {
      return {
        message: [
          "Launched a new application",
          "Removed event from calendar",
          "Has joined your mailing list",
          "Created a new task list",
          "Added event to calendar",
          "Opened a new ticket",
          "Closed a ticket",
          "Paid pending invoice"
        ][Math.floor(Math.random() * 8)],
        subject: [
          "Megan Hanson",
          "Jeffrey Freeman",
          "Amber McCoy",
          "Megan Gibson",
          "Melissa Sanders",
          "Danielle Perkins",
          "Roy Matthews",
          "Samantha West"
        ][Math.floor(Math.random() * 8)],
        avatar: `assets/images/face${Math.floor(Math.random() * 7) + 1}.jpg`,
        id: i
      };
    });
}
