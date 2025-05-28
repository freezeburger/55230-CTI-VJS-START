type Patient = {
    id: number;
    name: string;
    age: number;
    insuranceType: 'BASIC' | 'PREMIUM' | 'NONE';
};

interface ReimbursementStrategy {
    calculate(patient: Patient, baseAmount: number): number;
}

class BasicInsuranceStrategy implements ReimbursementStrategy {
    calculate(patient: Patient, baseAmount: number): number {
        return baseAmount * 0.7;
    }
}

class PremiumInsuranceStrategy implements ReimbursementStrategy {
    calculate(patient: Patient, baseAmount: number): number {
        return baseAmount * 0.9;
    }
}

class NoInsuranceStrategy implements ReimbursementStrategy {
    calculate(patient: Patient, baseAmount: number): number {
        return 0;
    }
}


const patient: Patient = {
    id: 1,
    name: "John Doe",
    age: 45,
    insuranceType: "PREMIUM",
};


const strategyMap = {
    BASIC: new BasicInsuranceStrategy(),
    PREMIUM: new PremiumInsuranceStrategy(),
    NONE: new NoInsuranceStrategy(),
  };


class Reimbursement {
    private strategy: ReimbursementStrategy;
  
    constructor(private readonly patient: Patient) {
      this.strategy = this.resolveStrategy(patient);
    }
  
    private resolveStrategy(patient: Patient): ReimbursementStrategy {
      switch (patient.insuranceType) {
        case "BASIC":
          return new BasicInsuranceStrategy();
        case "PREMIUM":
          return new PremiumInsuranceStrategy();
        case "NONE":
        default:
          return new NoInsuranceStrategy();
      }
    }
  
    compute(baseAmount: number): number {
      return this.strategy.calculate(this.patient, baseAmount);
    }
  }

const reimbursement = new Reimbursement(patient);