import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { AvatarSelection, AvatarStyle, TopType, AccessoriesType, HairColor, FacialHairType, ClotheType, ClotheColor, EyeType, EyebrowType, MouthType, SkinColor, BackgroundColor, GraphicType, PetType, AwardType, HatColor, AccessoriesColor, NoseType, EarringType, EarringColor, SaveAvatar } from 'ng-avataaars-library';

import Swal from 'sweetalert2/dist/sweetalert2.js'


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {

  public prueba: string = "";
  loadedAvatar!: AvatarSelection;
  loadedName: string = "";

  constructor(
    private cdRef: ChangeDetectorRef
  ) {

  }

  ngAfterViewInit(): void {
    let localAvatar = localStorage.getItem("avatar");
    this.loadedAvatar = localAvatar ? JSON.parse(localAvatar) : null;

    if (!this.loadedAvatar)
      return;

    console.log(this.loadedAvatar)
    this.avatarSelection = this.loadedAvatar;

    let localName = localStorage.getItem("nombre");
    console.log("LocalName", localName);

    if (!localName)
      return;

    this.loadedName = localName ? JSON.parse(localName) : null;
    this.cdRef.detectChanges();
  }

  private onDownloadPNG() {

  }
  title = 'avatar-demo';

  avatarSelection: AvatarSelection = {
    avatarStyle: AvatarStyle.Transparent,
    topType: TopType.ShortHairShortFlat,
    accessoriesType: AccessoriesType.Blank,
    hairColor: HairColor.Black,
    facialHairType: FacialHairType.Blank,
    facialHairColor: HairColor.Black,
    eyebrowColor: HairColor.Black,
    clotheType: ClotheType.BlazerShirt,
    clotheColor: ClotheColor.Blue02,
    clotheColor2: ClotheColor.Blue01,
    clotheColor3: ClotheColor.Black,
    eyeType: EyeType.Default,
    eyebrowType: EyebrowType.Default,
    mouthType: MouthType.Smile,
    skinColor: SkinColor.Light,
    backgroundColor: BackgroundColor.ColorH,
    graphicType: GraphicType.Bat,
    petType: PetType.None,
    awardType: AwardType.None,
    hatColor: HatColor.Black,
    accessoriesColor: AccessoriesColor.Black,
    noseType: NoseType.Default,
    earringType: EarringType.Blank,
    earringColor: EarringColor.Black
  };

  onAvatarSaved(saveAvatar: SaveAvatar, nombre: HTMLInputElement) {
    console.log(saveAvatar);
    localStorage.setItem('nombre', JSON.stringify(nombre.value));
    localStorage.setItem('svg', JSON.stringify(saveAvatar.svg));
    localStorage.setItem('avatar', JSON.stringify(saveAvatar.avatarSelection));

    Swal.fire('Información guardada correctamente')
  }

  ngOnInit(): void {
  }

}
