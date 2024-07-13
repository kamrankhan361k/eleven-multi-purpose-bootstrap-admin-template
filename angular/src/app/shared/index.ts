import { AvatarComponent } from "./avatar/avatar.component";
import { CommonModule } from "@angular/common";
import { IconComponent } from "./icon/icon.component";
import { ImageStatComponent } from "./image-stat/image-stat.component";
import { LottieModule } from "ngx-lottie";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PostCardComponent } from "./post-card/post-card.component";
import { ProfileStatComponent } from "./profile-stat/profile-stat.component";
import { StatComponent } from "./stat/stat.component";
import { WeatherCardComponent } from "./weather-card/weather-card.component";
import player from "lottie-web";

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [
    AvatarComponent,
    IconComponent,
    ImageStatComponent,
    PostCardComponent,
    ProfileStatComponent,
    StatComponent,
    WeatherCardComponent
  ],
  exports: [
    CommonModule,
    AvatarComponent,
    IconComponent,
    ImageStatComponent,
    PostCardComponent,
    ProfileStatComponent,
    StatComponent,
    WeatherCardComponent
  ]
})
export class ElevenSharedModule {}
