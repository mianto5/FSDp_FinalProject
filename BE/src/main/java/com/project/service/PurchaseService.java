package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Purchase;
import com.project.repo.PurchaseRepo;

@Service
public class PurchaseService {
	
	@Autowired
	private PurchaseRepo purchaseRepo;

	public Purchase addPurchase(Purchase purchase) {
		return purchaseRepo.save(purchase);
	}

}
