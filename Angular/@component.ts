@Component({
    selector: 'manage-marketing',
    templateUrl: 'manage-marketing-.component.html',
    styleUrls: ['../admin.component.css'],
    adnimations: [
        trigger("selectionContainerFadeInAnimation", [
            state("in", style({ opacity: 1 })),
            transition(":enter", [style({ opacity: 0 }), animate(500)]),
            transition(":leave", animate(500, style({ opacity: 0})))
        ])
    ]
})
