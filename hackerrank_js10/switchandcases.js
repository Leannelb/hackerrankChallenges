// switchandcases

private residenceAdvertShowCommand: ResidenceAdvertShowCommand;
public advertisedDate = null;
public status = null;
public advertCampaignStateCode = null;

ngOnInit() {
    if (this.authService.hasRequiredRoles([RoleEnum.ApplicationManagement])) {
        this.bidsNewTableColumns.push({title: 'Status', field: 'bidStatus', headerSort: false, formatter: this.formatStatus});
        this.bidsNewTableColumns.push({
            title: '',
            field: 'buttonsInMenu',
            align: 'center',
            width: '50',
            headerSort: false,
            formatter: this.flexxTabulatorService.addFlexxButtonsInMenu,
            formatterParams: {subject: this.buttonsMenuClickSubject}
        });
    } else {
        this.bidsNewTableColumns.push({title: 'Status', field: 'bidStatus', minWidth: '280', headerSort: false, formatter: this.formatStatus});
    }
    this.route.params.subscribe(
        params => {
            this.residenceId = params.id;
            if (params.residenceAdvertId) {
                this.residenceAdvertId = Number(params.residenceAdvertId);
            }

            this.householdFlagsClickSubject.subscribe(cell => {
                this.openHouseholdPopup(cell);
            });

            this.buttonsMenuClickSubject.subscribe(event => {
                if (!this.processingMenuClick) {
                    switch (event.event.detail) {
                        case ActionCodeEnumHousehold.CreateOfferLetter :
                            this.openCreateOfferLetter(event.row);
                            break;
                        case ActionCodeEnumHousehold.ViewInfo :
                            this.openHouseholdPopupFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.VerifyInformation :
                            this.verifyInformationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.ViewHouseholdApplications :
                            this.viewHouseholdApplicationsFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.Match :
                            this.processingMenuClick = true;
                            this.matchApplicationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.Unmatch :
                            this.processingMenuClick = true;
                            this.unmatchApplicationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.CreateTenancy :
                            this.processingMenuClick = true;
                            this.createTenancyFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.ActivateTenancy :
                            this.activateTenancyFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.Reject :
                            this.rejectApplicationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.Unreject :
                            this.processingMenuClick = true;
                            this.unrejectApplicationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.Withdraw :
                            this.withdrawApplicationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.WithdrawReason :
                            this.withdrawApplicationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.Reviewed :
                            this.processingMenuClick = true;
                            this.reviewedApplicationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.PassOver :
                            this.processingMenuClick = true;
                            this.passOverApplicationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.UndoPassOver :
                            this.processingMenuClick = true;
                            this.undoPassOverApplicationFromMenu(event.row);
                            break;
                        case ActionCodeEnumHousehold.ViewSnapshot :
                        this.downloadSnapshot(event.row);
                            break;
                        case ActionCodeEnumHousehold.AddFlagToHousehold :
                            this.openAddFlagDialog(event.row);
                            break;
                    }
                }
            });

            this.loadContent();
            this.householdClickSubject.subscribe(cell =>{
                this.openHouseholdPopup(cell);
            });
        });
}