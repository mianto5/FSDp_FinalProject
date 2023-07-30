package com.project.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.Purchase;

@Repository
public interface PurchaseRepo extends CrudRepository<Purchase, String>{
	

}
