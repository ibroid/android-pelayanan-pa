import moment from "moment";
import 'moment/locale/id';

export function localDate(date: Date | string | null | undefined) {
    if (!date) return 'Belum Putus';
    return moment(date, 'YYYY-MM-DD').locale('id').format('dddd, DD MMMM YYYY');
}

export function dateDiff(startDate: Date | string, endDate: Date | string) {
    const start = moment(startDate);
    const end = moment(endDate);
    return start.diff(end, 'days');
}