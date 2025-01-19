import { DateRange } from "./date_range";

describe('DateRange Value Object', () => {
    it('deve criar uma instancia de DateRange com data de início e data de término, e verificar o retorno dessas datas', () =>{
        const startDate = new Date("2024-12-20");
        const endDate = new Date("2024-12-25");
        const dateRange = new DateRange(startDate, endDate);
          
        expect(dateRange.getStartDate()).toEqual(startDate);
        expect(dateRange.getEndDate()).toEqual(endDate);
    });

    it('deve lançar um erro se a data de término for antes da data de inicío', () =>{
        expect(() => {
            new DateRange(new Date('2024-12-25'), new Date('2024-12-20'));
        }).toThrow('A data de término deve ser posterior a data de início.');
    });

    it('deve calcular o total de noites corretamente', () =>{
        const startDate = new Date("2024-12-20");
        const endDate = new Date("2024-12-25");
        const dateRange = new DateRange(startDate, endDate);

        const totalNights = dateRange.getTotalNights();

        expect(totalNights).toBe(5);
    });

});
