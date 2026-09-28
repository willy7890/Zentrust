// Database models / TypeScript interfaces for the backend

export type ConsentStatus = 'ACTIVE' | 'REVOKED' | 'EXPIRED';

export type DataCategory =
	| 'IDENTITY'
	| 'TRANSACTIONS'
	| 'CASH_FLOW'
	| 'CREDIT'
	| 'ACCOUNTING';

export interface ConsentRecord {
	id: string;
	businessId: string;
	institutionId: string;
	categories: DataCategory[];
	status: ConsentStatus;
	grantedAt: Date;
	expiresAt: Date;
	revokedAt?: Date;
}

export interface FinancialProfile {
	businessId: string;
	currency: string;
	periodStart: Date;
	periodEnd: Date;
	revenue: number;
	expenses: number;
	cashBalance: number;
	updatedAt: Date;
}
